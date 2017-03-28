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
  var colums=[
              { title: "config file name" },
              { title: "create time" }
          ];
  $(document).ready(function() {
      $('#example').DataTable( {
          aaData: dataSet,
          aaColumns:colums ,
          "aoColumnDefs": [ {
				"sWidth": "50%",
				"aTargets": [ 0 ],
				"mData": 0,
				"className" : "dbmgr-nowrap",
				"mRender": function ( data, type, full ) {
						if(type == 'display') {
							var rowcontent = '<a href="#" data-toggle="modal" data-target="#myModal">'+data+'</a>';
							return rowcontent;                         

						}else { 
							return data;
						}
					}
			},
			{
				"sWidth": "50%",
				"aTargets": [ 1 ],
				"mData": 1
			},]
      } );
  } );

}(jQuery);
