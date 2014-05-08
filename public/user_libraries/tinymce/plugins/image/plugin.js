/*global tinymce:true */
/*global $:true */

(function () {
	'use strict';

	tinymce.PluginManager.add('image', function (editor) {
		var allowedUploader,
			showDialog = function () {
				var tab = 'link', body;
				if (typeof $.cookie === 'undefined') {
					$.getScript('/libraries/jquery.cookie/jquery.cookie.js', removeUploadCookie);
				}
				body = [{
					title: 'Insert link',
					type: 'form',
					items: [{
						label: 'Url',
						name: 'linkUrl',
						type: 'textbox'
					}, {
						label: 'Width',
						name: 'linkWidth',
						type: 'textbox'
					}, {
						label: 'Height',
						name: 'linkHeight',
						type: 'textbox'
					}],
					onShowTab: function () {
						tab = 'link';
					}
				}];
				if (allowedUploader) {
					body.push({
						title: 'Upload picture',
						type: 'form',
						pack: 'start',
						items: [{
							label: 'Upload',
							type: 'iframe',
							url: '/system/imageuploader',
							minWidth: 320,
							minHeight: 50
						}, {
							label: 'Width',
							name: 'uploadWidth',
							type: 'textbox'
						}, {
							label: 'Height',
							name: 'uploadHeight',
							type: 'textbox'
						}],
						onShowTab: function () {
							tab = 'upload';
						}
					});
				}
				editor.windowManager.open({
					title: 'Insert image',
					bodyType: 'tabpanel',
					body: body,
					onSubmit: function () {
						var data, content;
						data = submit[tab](this.toJSON());
						if (!data.url || data.url.indexOf('://') === -1) {
							return false;
						}
						content = imgTemplate(data);
						editor.insertContent(content);
						return true;
					}
				});
			},
			imgTemplate = function (data) {
				var html;
				html = '<img src="' + data.url + '"';
				if (data.width) {
					html += ' width="' + data.width + '"';
				}
				if (data.height) {
					html += ' height="' + data.height + '"';
				}
				html += ' />';
				return html;
			},
			submit = {
				link: function (data, close) {
					return({
						url: data.linkUrl,
						width: data.linkWidth,
						height: data.linkHeight
					});
				},
				upload: function (data, close) {
					return({
						url: readUploadCookie(),
						width: data.uploadWidth,
						height: data.uploadHeight
					});
				}
			},
			readUploadCookie = function () {
				var url = $.cookie(diybb.cookiePrefix + 'uploadimage');
				removeUploadCookie();
				return url;
			},
			removeUploadCookie = function () {
				$.removeCookie(diybb.cookiePrefix + 'uploadimage', {
					path: diybb.cookiePath,
					domain: diybb.cookieDomain
				});
			};

		editor.addButton('image', {
			icon: 'image',
			tooltip: 'Insert/edit image',
			onclick: showDialog,
			stateSelector: 'img:not([data-mce-object],[data-mce-placeholder])'
		});

		$.getJSON('/system/imageupallowed', function (res) {
			allowedUploader = res.state;
		});
	});
}());