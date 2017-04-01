/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  	var InstallResetButton  = '#installResetButton',
  		InstallApplyButton  = '#installApplyButton',
  		InstallDialog       = '#installDialog',
  	 	Form 				= '#form',
  		SelectConfig		= '#selectConfig';
  	var oTable;
  	$(document).ready(function() {
      	oTable=initTable();
		$(InstallResetButton).click(function(){
		  	resetForm();
		});
		  
		$(InstallApplyButton).click(function(){
		  	install();
		});
		  
		$(InstallApplyButton).click(function(){
		  	install();
		});
		
		//init selector
			queryConfig();
	      
	     //form show function 
	  	$(InstallDialog).on('show.bs.modal', function (e) {
			
		});
	
		//form hide function
		$(InstallDialog).on('hide.bs.modal', function (e, v) {
			resetForm();
		});
		
		//
//		var fso=new ActiveXObject(Scripting.FileSystemObject); 
  	});
  
  	//reset form function
	var resetForm =function(){
	  	document.getElementById("form").reset();
	}
  
  	//install function
  	var install =function(){
             oTable.draw();
             $(InstallDialog).modal("hide");
             
	}
  	
  	var initTable = function(){
  		var table =$('#installTable').DataTable( {
  			ajax: {
  	  			url: "queryInstall",
  	  		    type: "post",  
  	  		    dataType: "json",  
  	  		    contentType: "application/json", 
  	  		    dataSrc: ''
  	  		  	},
  	  		  	bFilter:false,
  	            columns: [{ data: 'id', title:"id" },
  	                      { data: 'name',  title:'name'},
  	                      { data: 'rate', title:'name'}
  	                  ],
  	            "aoColumnDefs": [ {
  	  				"sWidth": "30%",
  	  				"aTargets": [ 0 ],
  	  				"mData": 0,
  	  				"className" : "dbmgr-nowrap"
  	  			},
  	  			{
  	  				"sWidth": "30%",
  	  				"aTargets": [ 1 ],
  	  				"mData": 1
  	  			},{
  	  				"sWidth": "40%",
  	  				"aTargets": [ 2 ],
  	  				"mData": 2,
	  	  			"mRender": function ( data, type, full ) {
							if(type == 'display') {
									var rowcontent =	'<div class="progress"><div class="progress-bar" role="progressbar"'+
										'aria-valuenow="60"aria-valuemin="0" aria-valuemax="100" style="width:'+data+';">'+
										'<span class="sr-only"></span></div></div>';
								return rowcontent;                         
	
							}else { 
								return data;
							}
						}
  	  			},]
  	      } );
    	return table;
  	}
  	
  	var queryConfig =function(){
  		$.ajax({  
            url: "queryConfig",    //后台webservice里的方法名称  
            type: "post",  
            dataType: "json",  
            contentType: "application/json",  
            traditional: true,  
            success: function (data) {  
                    var jsonObj =data;  
                    var optionstring = "";  
                    for (var i = 0; i < jsonObj.length; i++) {  
                        optionstring += "<option value=\"" + jsonObj[i].fileName + "\" >" + jsonObj[i].fileName + "</option>";  
                    }  
                    $(SelectConfig).html("<option value='请选择'>请选择...</option> "+optionstring);  
            },  
            error: function (msg) {  
                alert("出错了！");  
            }  
        });            
  	}
  

}(jQuery);
