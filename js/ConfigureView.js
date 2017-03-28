2/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  var dataSet = [
                 [ "configure_file_test1.conf", "2011/07/25"],
                 [ "configure_file_test2.conf", "2011/07/26"]
                
             ];
  $(document).ready(function() {
      $('#example').DataTable( {
          aaData: dataSet,
          aaColumns: [
              { title: "config file name" },
              { title: "create time" }
          ],
          "mRender": function ( data, type, full ) {
				if(type == 'display') {
					/*var rowcontent = '<a href=\"#security/maclabel/attribute?labelName='+ data+ '\" style="cursor:pointer">'+data+'</a>';*/
					var rowcontent = '<a href="#" data-toggle="modal" data-target="#myModal">'+data+'</a>';
					return rowcontent;                         

				}else { 
					return data;
				}
			}
      } );
  } );

}(jQuery);
