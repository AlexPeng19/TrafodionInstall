package com.esgyn.servlet;

import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.Time;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.esgyn.util.RspMsg;
import com.esgyn.util.WriteUtil;

public class NewConfig extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public NewConfig() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 Properties props = new Properties();  
		 SimpleDateFormat format =new SimpleDateFormat("yy-MM-dd HH:mm:ss");
		 RspMsg rsp =new RspMsg();
		 Map<String,String> map =WriteUtil.getParamMap(request);
		 String fileName = map.get("configureFileName")+".properties";
		 try {  
			 changeValue(map,"traf_start","dcs_ha","offline_mode","ldap_security");
	         for (String key : map.keySet()) {
	        	 props.setProperty(key, map.get(key));
	        }
	         	props.put("createTime",format.format(new Date()));
	            FileOutputStream oFile = new FileOutputStream(request.getRealPath("configer")+ "\\"+fileName, true);//true表示追加打开
	            System.out.println(request.getRealPath("configer")+ "\\"+fileName);
	            props.store(oFile, "The New properties file");
	            oFile.close();
	            rsp.setErrCode("200");
	            rsp.setErrMsg("SUCC");
	            WriteUtil.flushStr(response, rsp);
	        } catch (IOException e) {  
	            e.printStackTrace();  
	        }  
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

	//change dcs_ha offline_mode ldap_security traf_start to Y/N
	public  static Map<String,String> changeValue(Map<String,String> map ,String ...args){
		for (String string : args) {
			if(map.containsKey(string)&&"on".equals(map.get(string))){
         		map.put(string, "Y");
         	}else{
         		map.put(string, "N");
         	}
		}
		return map;
	}
}
