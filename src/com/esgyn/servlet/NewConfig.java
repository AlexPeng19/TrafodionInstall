package com.esgyn.servlet;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Map;
import java.util.Properties;
import java.util.UUID;

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
		 RspMsg rsp =new RspMsg();
		 Map<String,String> map =WriteUtil.getParamMap(request);
		 String fileName = UUID.randomUUID().toString()+".properties";
		 try {  
	         for (String key : map.keySet()) {
	        	 props.setProperty(key, map.get(key));
	        }
	            FileOutputStream oFile = new FileOutputStream(request.getRealPath("configer")+ "\\"+fileName, true);//true表示追加打开
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

}
