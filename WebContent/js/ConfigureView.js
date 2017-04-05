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
                      {data: 'createTime',title: 'createTime' },
                      {data: 'traf_start',title: 'traf_start' },
                      {data: 'dcs_ha',title: 'dcs_ha' },
                      {data: 'offline_mode',title: 'offline_mode' },
                      {data: 'ldap_security',title: 'ldap_security' }
                  ],
            "aoColumnDefs": [ {
  				
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
  				"aTargets": [ 1 ],
  				"mData": 1
  			},{
  				"aTargets": [ 2 ],
  				"mData": 2
  			},{
  				"aTargets": [ 3 ],
  				"mData": 3
  			},{
  				"aTargets": [ 4 ],
  				"mData": 4
  			}]
      } );
  	  
  	  
  	  $("[name='traf_start']").bootstrapSwitch({
  			onText:"Y",  
  			offText:"N",
  	  });
  	  
     $('#configForm').on('init.form.bv', function(e, data) {
     })
     .bootstrapValidator({
    	 message: 'This value is not valid',
    	 feedbackIcons: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
    	 	}
	    })
    .on('change', 'input[type="checkbox"][name="dcs_ha"]', function() {
    	var sameAsSender   = $(this).is(':checked');
    	if(sameAsSender){
    		$("#dcsDisplay1").show();
    		$("#dcsDisplay2").show();
    		$('#configForm').bootstrapValidator('addField', 'dcs_floating_ip', {validators: {notEmpty: {message: 'This value is not valid'}}})
    						.bootstrapValidator('addField', 'dcs_interface', {validators: {notEmpty: {message: 'This value is not valid'}}})
    						.bootstrapValidator('addField', 'dcs_backup_nodes', {validators: {notEmpty: {message: 'This value is not valid'}}});
    	}else{
    		$("#dcsDisplay1").hide();
    		$("#dcsDisplay2").hide();
    		$('#configForm').bootstrapValidator('removeField', 'dcs_floating_ip');
    		$('#configForm').bootstrapValidator('removeField', 'dcs_interface');
    		$('#configForm').bootstrapValidator('removeField', 'dcs_backup_nodes');
    	}
    })
     .on('change', 'input[type="checkbox"][name="offline_mode"]', function() {
	    	var sameAsSender   = $(this).is(':checked');
	    	if(sameAsSender){
	    		$("#installDisplay").show();
	    		$('#configForm').bootstrapValidator('addField', 'local_repo_dir', {validators: {notEmpty: {message: 'This value is not valid'}}});
	    	}else{
	    		$("#installDisplay").hide();
	    		$('#configForm').bootstrapValidator('removeField', 'local_repo_dir');
	    	}
	    })
     .on('change', 'input[type="checkbox"][name="ldap_security"]', function() {
	    	var sameAsSender   = $(this).is(':checked');
	    	if(sameAsSender){
	    		$("#ldapDisplay1").show();
	    		$("#ldapDisplay2").show();
	    		$('#configForm').bootstrapValidator('addField', 'db_admin_user', {validators: {notEmpty: {message: 'This value is not valid'}}})
	    		.bootstrapValidator('addField', 'db_admin_pwd', {validators: {notEmpty: {message: 'This value is not valid'}}})
	    		.bootstrapValidator('addField', 'db_root_user', {validators: {notEmpty: {message: 'This value is not valid'}}})
	    		.bootstrapValidator('addField', 'ldap_hosts', {validators: {notEmpty: {message: 'This value is not valid'}}})
	    		.bootstrapValidator('addField', 'ldap_port', {validators: {notEmpty: {message: 'This value is not valid'}}})
	    		.bootstrapValidator('addField', 'ldap_identifiers', {validators: {notEmpty: {message: 'This value is not valid'}}})
	    		.bootstrapValidator('addField', 'ldap_encrypt', {validators: {notEmpty: {message: 'This value is not valid'}}});
	    		$("#db_admin_user").val("admin");
	    		$("#db_admin_pwd").val("traf123");
	    		$("#db_root_user").val("trafodion");
	    		$("#ldap_port").val("389");
	    		$("#ldap_encrypt").val("0");
	    	}else{
	    		$("#ldapDisplay1").hide();
	    		$("#ldapDisplay2").hide()
	    		$('#configForm').bootstrapValidator('removeField', 'db_admin_user');
	    		$('#configForm').bootstrapValidator('removeField', 'db_admin_pwd');
	    		$('#configForm').bootstrapValidator('removeField', 'db_root_user');
	    		$('#configForm').bootstrapValidator('removeField', 'ldap_hosts');
	    		$('#configForm').bootstrapValidator('removeField', 'ldap_port');
	    		$('#configForm').bootstrapValidator('removeField', 'ldap_identifiers');
	    		$('#configForm').bootstrapValidator('removeField', 'ldap_encrypt');
	    		
	    		$("#db_admin_user").val("");
	    		$("#db_admin_pwd").val("");
	    		$("#db_root_user").val("");
	    		$("#ldap_port").val("");
	    		$("#ldap_encrypt").val("");
	    	}
	    }).on('change', 'select[name="ldap_encrypt"]', function() {
	    	var sameAsSender   = this.value;
	    	if(sameAsSender==1||sameAsSender==2){
	    		$('#configForm').bootstrapValidator('addField', 'ldap_certpath', {validators: {notEmpty: {message: 'This value is not valid'}}});
	    	}else{
	    		$('#configForm').bootstrapValidator('removeField', 'ldap_certpath');
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
	  $('#configForm').bootstrapValidator('validate');
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
	      }); 
		  return true;
	  }
	  return false;
  }
  
}(jQuery);
