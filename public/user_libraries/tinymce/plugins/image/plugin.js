/*global tinymce:true */

(function () {
	'use strict';

	tinymce.PluginManager.add('image', function(editor) {
		var showDialog = function () {
			editor.windowManager.open({
				title: 'Insert image',
				bodyType: 'tabpanel',
				body: [{
					title: 'Insert link',
					type: 'form',
					items: [{
						label: 'Url',
						name: 'url',
						type: 'textbox'
					}, {
						label: 'Width',
						name: 'width',
						type: 'textbox'
					}, {
						label: 'Height',
						name: 'height',
						type: 'textbox'
					}]
				}, {
					title: 'Upload picture',
					type: 'form',
					pack: 'start',
					items: [{
						type: 'iframe',
						url: 'http://api.diyrpg.net/imageuploader',
						minWidth: 320,
						minHeight: 260
					}]
				}]
			});
		}

		editor.addButton('image', {
			icon: 'image',
			tooltip: 'Insert/edit image',
			onclick: showDialog,
			stateSelector: 'img:not([data-mce-object],[data-mce-placeholder])'
		});
	});
}());