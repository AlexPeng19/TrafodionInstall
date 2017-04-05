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
                      {data: 'createTime',title: 'createTime' }
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
  	  
  	  
  	  $("[name='traf_start']").bootstrapSwitch({
  			onText:"Y",  
  			offText:"N",
			onSwitchChange:function(event,state){  
	            if(state==true){  
	                $(this).val("Y");  
	            }else{  
	                $(this).val("N");  
	            }  
	        }
  	  });
  	  $("[name='dcs_ha']").bootstrapSwitch({
  			onText:"Y",  
  			offText:"N",
			onSwitchChange:function(event,state){  
	            if(state==true){  
	                $(this).val("Y");  
	            }else{  
	                $(this).val("N");  
	            }  
	        }
  	  });
  	  $("[name='offline_mode']").bootstrapSwitch({
  			onText:"Y",  
  			offText:"N",
			onSwitchChange:function(event,state){  
	            if(state==true){  
	                $(this).val("Y");  
	            }else{  
	                $(this).val("N");  
	            }  
	        }
  	  });
  	  $("[name='ldap_security']").bootstrapSwitch({
  			onText:"Y",  
  			offText:"N",
			onSwitchChange:function(event,state){  
	            if(state==true){  
	                $(this).val("Y");  
	            }else{  
	                $(this).val("N");  
	            }  
	        }
  	  });
  	
  	  
         $('#configForm').bootstrapValidator({
        	 message: 'This value is not valid',
        	 feedbackIcons: {
					valid: 'glyphicon glyphicon-ok',
					invalid: 'glyphicon glyphicon-remove',
					validating: 'glyphicon glyphicon-refresh'
        	 	}
		    }).on('error.form.bv', function(e) {
		        var $form              = $(e.target),
		        bootstrapValidator = $form.data('bootstrapValidator');
		
		    if (!bootstrapValidator.isValidField('captcha')) {
		        generateCaptcha();
		    }
		});
         
        $("#traf_user").blur(function(){
        	if(this.value==""){
        		this.value="trafodion";
        	}
        });
     
        $("#newConfig").click(function(){
        	newConfig();
        });
  } );
  
  
  var newConfig =function(){
	  console.log( $("#configForm").data('bootstrapValidator').isValid());
	  if( $("#configForm").data('bootstrapValidator').isValid()){
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
		  return true;
	  }
	  return false;
  }
  
}(jQuery);
