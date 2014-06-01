(function(window, undefined){
if ('Uploader' in window) {
	return;
}
var document = window.document,
R_SPLIT = /[\s|,]+/,
R_PROTOCOL = /^\w{3,6}:\/\//,
EXPANDO = 'expando' + (new Date).getTime(),
SWF_URL = '/user_libraries/uploader/uploader.swf',
INSTS = {}, PULGINS = {}, _debug = null,
flashVersion = (function(){
	try {
		return (window.ActiveXObject
			? (new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash')).GetVariable('$version')
			: navigator.plugins['Shockwave Flash'].description).match(/\d+/g).join('.') || null;
	} catch (e) {
		return null;
	}
})(),
OPTIONS = {
	/*
	fieldName:'Filedata',
	plugin:'progress',
	params:{},
	fileExt:'',
	fileDesc:'',
	multi:true,
	sizeLimit:0,
	queueLengthLimit:0,

	selectStart:function(){},
	selectOne:function(){},
	selectEnd:function(){},
	uploadStart:function(){},
	uploadProgress:function(){},
	uploadCompelte:function(){},
	uploadCancel:function(){},
	queueStart:function(){},
	queueComplete:function(){},
	queueSuccess:function(){},
	queueClear:function(){},
	queueFull:function(){},
	error:function(){},
	*/
	movie  : 'uploader.swf',
	script : '',
	auto   : true,
	multi  : true,
	plugin : 'progress'
},
TRIGGERS = {
	'before:uploadComplete':function(t, args){
		if (args) {
			var data = decodeURIComponent(args[0].data);
			args[0].data = data;
			if (t.jsonType) {
				try {
					data = window.JSON ? window.JSON.parse(data) : (new Function('return ' + data))();
				} catch (e) {
					data = null;
				}
			}
			args.unshift(data);
		}
	},
	'after:selectEnd':function(t, args){
		t.auto && t.upload();
	}
};
function css(elem, name, value) {
	if (typeof name == 'object') {
		for (var k in name) {
			css(elem, k, name[k]);
		}
		return elem;
	}
	if (!elem || elem.nodeType === 3 || elem.nodeType === 8) {
		return elem;
	}
	if (typeof value === "number") {
		value += "px";
	}
	if ((name === "width" || name === "height") && parseFloat(value) < 0) {
		value = undefined;
	}
	if (value !== undefined) {
		elem.style[name] = value;
	}
	return elem;
}
function extend(target, source){
	for (var key in source) {
		target[key] = source[key];
	}
	return target;
}
var toElement = function() {
	var div = document.createElement('div');
	return function(html) {
		div.innerHTML = html;
		html = div.firstChild;
		div.removeChild(html);
		return html;
	};
}();
function append(elem, value) {
	elem.appendChild(value);
	return elem;
}
function each(o, fn) {
	o = o.split(R_SPLIT);
	for (var i = 0, l = o.length,t = o[0];i < l && fn.call(t, t, i) !== false; t = o[++i]){}
}
function version_test(a, b) {
	if (!a) return false;
	a = a.split('.');
	b = b.split('.');
	a[0] = parseInt(a[0]);
	b[0] = parseInt(b[0]);
	for (var i=0, l=b.length; i < l; i++) {
		if (a[i]==undefined || a[i] < b[i]) {
			return false;
		} else if (a[i] > b[i]) {
			return true;
		}
	}
	return true;
}
function _genValue(obj, enc) {
	if (obj instanceof Object) {
		var arr = [];
		for (var k in obj) {
			arr.push(k+'='+ _genValue(obj[k], 1));
		}
		obj = arr.join('&');
	}
	return enc ? encodeURIComponent(obj) : obj;
}
function _genAttrs(obj) {
	var arr = [];
	for (var k in obj) {
		obj[k] && arr.push([k,'="',_genValue(obj[k]),'"'].join(''));
	}
	return arr.join(' ');
}
function _genParams(obj) {
	var arr = [];
	for (var k in obj) {
		arr.push(['<param name="', k, '" value="', _genValue(obj[k]), '" />'].join(''));
	}
	return arr.join('');
}
function createFlash(opts) {
	if (!opts.movie) {
		return false;
	}

	if (!version_test(flashVersion, '9.0.24')) {
		alert('flash version not available');
		return false;
	}
	
	var div = document.createElement('div');
	opts.type = 'application/x-shockwave-flash';
	if (window.ActiveXObject) {
		var attrs = {
			classid:'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
			style:'position:absolute;left:0;top:0;display:block;z-index:1'
		};
		each('width height id', function(k) {
			opts[k] && (attrs[k] = opts[k]);
			delete opts[k];
		});
		div.innerHTML = [
			'<object ', _genAttrs(attrs), '>',
				_genParams(opts),
			'</object>'
		].join('');
	} else {
		opts.style = 'position:absolute;left:0;top:0;display:block;z-index:1';
		opts.src = opts.movie;
		delete opts.movie;
		div.innerHTML = '<embed ' + _genAttrs(opts) + ' />';
	}
	return div.firstChild;
}
function callFlash(movie, functionName, argumentArray) {
	try {
		movie.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray||[], 0) + '</invoke>');
	} catch (ex) {
		throw "Call to " + functionName + " failed";
	}
}
function absUrl(script) {
	var pathname = location.pathname;
	if (script.substr(0, 1) != '/' && !R_PROTOCOL.test(script)) {
		pathname = pathname.split('/');
		pathname[pathname.length-1] = script.substr(0, 1) == '?'
			? (pathname[pathname.length-1]+script)
			: script;
		script = pathname.join('/');
	}
	return script;
}
function bindPlugin(plugin, up) {
	plugin && each(plugin, function(n){
		(n in PULGINS) && PULGINS[n](up);
	});
}
function saveUploader(elem, guid, uploader) {
	elem[EXPANDO] = guid;
	INSTS[guid] = uploader;
}
var Uploader = function(elem, opt) {
	opt = extend(extend({}, OPTIONS), opt || {});
	var t    = this,
		guid = 'UPLOADER' + (new Date()).getTime().toString(16),
		url  = SWF_URL + (SWF_URL.indexOf('?') > -1 ? '&' : '?') + guid,
		vars = {guid:guid, script:absUrl(opt.script||''), jsonType:opt.jsonType ? 1 : 0}, ival = null;
	t.guid = guid;
	t.auto = opt.auto;
	t.jsonType = opt.jsonType;
	t.events = {};
	t.params = extend({}, opt.params || {});
	
	each('fileExt fileDesc fieldName multi sizeLimit queueLengthLimit', function(k){
		opt[k] && (vars[k] = opt[k]);
	});
	each('selectStart selectOne selectEnd uploadStart uploadProgress uploadComplete uploadCancel queueStart queueComplete queueSuccess queueFull queueClear error', function(k){
		opt[k] && t.bind(k, opt[k]);
	});
	css(elem, {position:'relative', overflow:'hidden', display:'inline-block'});
	bindPlugin(opt.plugin, t);
	saveUploader(elem, guid, t);

	function display(){
		var w = elem.offsetWidth, h = elem.offsetHeight;
		if (!w || !h) return;
		ival && clearInterval(ival);
		t.movie = createFlash({
			movie:url,
			id:guid,
			width:w,
			height:h,
			flashvars:vars,
			quality:'high',
			wmode:'transparent',
			allowScriptAccess:'always'
		});
		append(elem, t.movie);
		display = null;
	}
	ival = setInterval(display, 1000);
	display();
};
Uploader.prototype = {
	bind:function(evt, fn) {
		var t = this;
		if (typeof evt == 'object') {
			for (var k in evt) {
				t.bind(k, evt[k]);
			}
		} else if (typeof fn == 'function') {
			if (!t.events[evt]) {
				t.events[evt] = [];
			}
			t.events[evt].push(fn);
		}
	},
	upload:function(ID) {
		callFlash(this.movie, 'startUpload', [ID]);
	},
	setParam:function(key, val) {
		this.params[key] = val;
	},
	/**
	 * compatible for v1
	 */
	set:function(key, val) {
		key == 'scriptData' && (this.params = val);
	},
	cancel:function(ID) {
		callFlash(this.movie, 'cancelUpload', [ID]);
	},
	clear:function() {
		callFlash(this.movie, 'clearQueue');
	}
};
Uploader.getUploader = function(elem) {
	var guid = elem[EXPANDO];
	return guid ? INSTS[guid] : null;
};
Uploader.addPlugin = function(name, plugin) {
	PULGINS[name] = plugin;
};
Uploader.trigger = function(guid, evt, args) {
	var t = INSTS[guid], f, listeners;
	if (t) {
		f = TRIGGERS['before:'+evt];
		f && f(t, args);
		_debug && _debug(guid, evt, args);
		listeners = t.events[evt];
		if (listeners) {
			for (var i=0,l; l=listeners[i++];) {
				l.apply(t, args);
			}
		}
		f = TRIGGERS['after:'+evt];
		f && f(t, args);
	}
};
Uploader.readParams = function(guid) {
	_debug && _debug(guid, "readParams", INSTS[guid].params);
	return _genValue(INSTS[guid].params);
};
Uploader.setDebug = function() {
	_debug = function(){console.info.apply(console, arguments);};
};
Uploader.testExternalInterface = function(guid) {
	try {
		callFlash(INSTS[guid].movie, 'testExternalInterface');
	} catch (e) {}
};

// internal plugin: progress
(function(){
var box = null, p = null, b = null;
function initbox(){
	if (!box) {
		box = toElement('<div class="upload-progress">'+
			'<div class="bar">'+
				'<div class="progress"></div>'+
				'<b class="percent"></b>'+
			'</div>'+
		'</div>');
		append(document.body, box);
		p = box.firstChild.firstChild;
		b = box.firstChild.lastChild;
	}
}
function progress(up) {
	initbox();
	var count = 0, percentage = {};
	up.bind({
		queueStart:function(data) {
			count = data.fileCount;
			percentage = {};
			css(box, 'display', 'block');
			css(p, 'width', 0);
			b.innerHTML = '0%';
		},
		uploadProgress:function(data) {
			percentage[data.ID] = data.percentage;
			var s = 0;
			for (var k in percentage) {
				s += percentage[k];
			}
			s = (count ? (s / count).toFixed() : '100') + '%';
			css(p, 'width', s);
			b.innerHTML = s;
		},
		error:function() {
			if (data.ID) {
				percentage[data.ID] = 100;
			}
		},
		uploadCancel:function() {
			delete percentage[data.ID];
			count-=1;
		},
		queueComplete:function(data) {
			css(p, 'width', '100%');
			b.innerHTML = '100%';
			setTimeout(function(){
				css(box, 'display', 'none');
			}, 1000);
		}
	});
}
Uploader.addPlugin('progress', progress);
})();

window.Uploader = Uploader;
})(window);

('jQuery' in window) && (function($){
/*
Compatible for cmstop uploader v1

start:selectStart          null, null
select:selectOne           {ID, file} {ID, file}
selectend:selectEnd        {fileCount, filesSelected, filesReplaced, allBytesTotal} {fileCount, allBytesTotal}
open:uploadStart           {ID, file, request} {ID, file}
progress:uploadProgress    {ID, file, speed, percentage, bytesLoaded, allBytesLoaded} {ID, file, speed, percentage, bytesLoaded, allBytesLoaded}
complete:uploadComplete    {file, data, fileCount, speed} {ID, file, data, fileCount}
cancel:uploadCancel        {file, fileCount, allBytesTotal}, {ID, file}
allcomplete:queueComplete  {filesUploaded, errors, allBytesLoaded, speed} {successCount, errorCount, allBytesLoaded}
queuefull:queueFull        queueSizeLimit, _queueLengthLimit
clear:queueClear           null, null
error:error                {ID, file, type, info} {ID, file, type, info}
*/
var _compatTable = {
	"queueSizeLimit":"queueLengthLimit",
	"fileDataName":"fieldName",
	"scriptData":"params",
	"start":"selectStart",
	"select":"selectOne",
	"selectend":"selectEnd",
	"open":"uploadStart",
	"progress":"uploadProgress",
	"complete":"uploadComplete",
	"cancel":"uploadCancel",
	"allcomplete":"queueComplete",
	"queuefull":"queueFull ",
	"clear":"queueClear"
};
('uploader' in $) || ($.uploader = function(elem, opt){
	if (opt) {
		var newOpt = {};
		for (var key in opt) {
			if (key in _compatTable) {
				newOpt[_compatTable[key]] = opt[key];
			} else {
				newOpt[key] = opt[key];
			}
		}
		opt = newOpt;
	}
	return new Uploader(elem.jquery ? elem[0] : $(elem)[0], opt);
});
	
('uploader' in $.fn) || ($.fn.uploader = function(options) {
	if (typeof options == 'string') {
		var args = [].slice.call(arguments, 1);
		this.each(function(){
			up = Uploader.getUploader(this);
			up && up[options].apply(up, args);
		});
		return this;
	}
	options || (options = {});
	return this.each(function(){
		var opt = $.extend({}, options), t = this, $t = $(t), v;
		if (Uploader.getUploader(t) instanceof Uploader) return;
		$.each('script multi fileDesc fileExt sizeLimit fileDataName'.split(/\s/), function(i, k){
			(v = $t.attr(k)) != undefined && (opt[k] = v);
		});
		if (opt.buttonImg) {
			var img = new Image();
		    img.onload = function(){
		    	$t.html(img);
		    	$.uploader(t, opt);
				img = null;
		    };
		    img.onerror = function(){
		    	$.uploader(t, opt);
				img = null;
		    };
		    img.src = opt.buttonImg;
			delete opt.buttonImg;
		} else {
			$.uploader(t, opt);
		}
	});
});
})(jQuery);
