/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';
  $(document).ready(function() {
  	  $('#example').DataTable( {
  		  ajax: {
  			url: "queryConfig",
  		    type: "post",  
  		    dataType: "json",  
  		    contentType: "application/json", 
  		    dataSrc: ''
  		  	},
  		  	bFilter:false,
            columns: [
                      { data: 'fileName',title: 'fileName' },
                      { data: 'context' ,title: 'context' }
                  ],
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
  	  
  	  $("#newConfig").click(function(){
  		  newConfig();
		});
     
  } );
  
  
  var newConfig =function(){
	  $.ajax({  
          url: "newConfig",    //后台webservice里的方法名称  
          type: "post",  
          data: $("#configForm").serialize(),  
          dataType:"json",
          traditional: true,  
          success: function (data) { 
        	  $('#example').DataTable().ajax.reload();
          },  
          error: function (msg) {  
              alert("出错了！");  
          }  
      });        
  }
  
}(jQuery);
