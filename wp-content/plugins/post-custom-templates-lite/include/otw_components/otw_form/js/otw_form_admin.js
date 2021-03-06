jQuery(document).ready(function($) {
	
	otw_form_init_fields();
});

otw_form_init_fields = function(){
	
	jQuery( '.otw-form-select' ).change( function(){
		jQuery( this ).parent().find( 'span' ).html( this.options[ this.selectedIndex ].text );
	} );
	
	var startingColour = '000000';
	jQuery( '.otw-color-selector' ).each( function(){ 
		
		var colourPicker = jQuery(this).ColorPicker({
		
		color: startingColour,
			onShow: function (colpkr) {
				jQuery(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				jQuery(colpkr).fadeOut(500);
				jQuery(colourPicker).next( 'input').change();
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				jQuery(colourPicker).children( 'div').css( 'backgroundColor', '#' + hex);
				jQuery(colourPicker).next( 'input').attr( 'value','#' + hex);
				
			}
		
		});
	});
	jQuery( '.otw-form-datetimepicker' ).each( function(){
		jQuery( this ).find( 'input' ).datetimepicker( {format: 'd.m.Y H:i' } );
	} );
	jQuery( '.otw-form-color-picker' ).change( function(){
		jQuery( this ).parent( 'div' ).children( 'div' ).children( 'div' ).css( 'backgroundColor', this.value );
	});
	jQuery(  '.otw-form-uploader' ).change( function(){
		otw_form_set_upload_preview_image( this.id );
	});
	jQuery(  '.otw-form-uploader-control' ).click( function( event ){
	
		var $this = jQuery(this),
		editor = $this.data('editor'),
		
		options = {
			frame:    'post',
			state:    'insert',
			title:    wp.media.view.l10n.addMedia,
			multiple: true
		};
		
		event.preventDefault();
		$this.blur();
		if ( $this.hasClass( 'gallery' ) ) {
			options.state = 'gallery';
			options.title = wp.media.view.l10n.createGalleryTitle;
		}
		wp.media.editor.insert = function( params ){
		
			var matches = null;
			
			if( matches = params.match( /src="([^\"]*)"/ ) ){
				
				jQuery( '#' + editor ).val( matches[1] );
			}else{
				jQuery( '#' + editor ).val( '' );
			}
			jQuery( '#' + editor ).change();
			
			otw_form_set_upload_preview_image( editor );
		}
		
		wp.media.editor.open( editor, options );
	} );
	jQuery(  '.otw-form-uploader-control' ).each( function(){
		otw_form_set_upload_preview_image( jQuery( this ).data( 'editor' ) );
	});
	
	otw_form_init_select_subfields();
	
	otw_form_init_active_items();
};

otw_form_init_select_subfields = function(){
	
	jQuery( 'select.otw_with_subfield' ).change( function(){
		otw_form_init_select_option_field( jQuery( this ) );
	});
	
	jQuery( 'select.otw_with_subfield' ).each( function(){
		otw_form_init_select_option_field( jQuery( this ) );
	});
};

otw_form_init_active_items = function(){
	
	var otw_ac_elements = jQuery( '.otw-ac-elements' );
	
	if( otw_ac_elements.size() ){
		
		for( var cE = 0; cE < otw_ac_elements.size(); cE++ ){
			
			var itemElements = jQuery( otw_ac_elements[cE] ).find( '.otw-ac-items' ).val();
			
			if( typeof itemElements !== 'undefined' ){
				
				var splitedItems = itemElements.split(',');
				
				jQuery( splitedItems ).each( function( item, value ){
					
					jQuery( otw_ac_elements[cE] ).find( '.js-ac-items-inactive  > .otw-form-ac-item' ).each( function( miItem, miValue ){
					
						if( jQuery(miValue).data('value') === value ){
							jQuery( otw_ac_elements[cE] ).find( '.js-ac-items-active' ).append( miValue );
						};
					});
				});
			}
			
			jQuery( otw_ac_elements[cE] ).find( '.js-ac-items-active, .js-ac-items-inactive' ).sortable( {
				
				connectWith: ".otw-form-items-box",
				update: function( event, ui ) {
					
					var elementsArray = new Array();
					ui.item.parents( '.otw-ac-elements' ).first().find( '.js-ac-items-active > .otw-form-ac-item' ).each( function( item, value ){
						
						elementsArray.push( jQuery(value).data('value') );
						
						var value_container = ui.item.parents( '.otw-ac-elements' ).first().find( '.otw-ac-items' );
						
						if( value_container.size() ){
							value_container.val( elementsArray );
							value_container.change();
						};
					});
				},
				stop: function( event, ui ) {
					jQuery.event.trigger({
						type: "metaEvent"
					});
				}
			} );
		};
	};
};

otw_form_init_select_option_field = function( select ){
	
	var parent = select.closest( 'div.otw-form-control' );
	parent.find( '.otw-form-subfield' ).fadeOut();
	
	var element_name = parent.attr( 'data-name' );
	
	var selected_node = jQuery( '#' + element_name + '_' + select.val() );
	
	if( selected_node.size() ){
		selected_node.fadeIn();
	};
};

otw_form_set_upload_preview_image = function( element_id ){

	var previewNode = jQuery( '#' + element_id + '-preview' );
	var previewURL  = jQuery( '#' + element_id ).val();
	
	previewNode.css('background-image', 'url("' + previewURL + '")');
	previewNode.css('background-repeat', 'no-repeat');
	
};