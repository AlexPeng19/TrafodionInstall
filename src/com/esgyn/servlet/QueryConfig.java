package com.esgyn.servlet;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.esgyn.util.ConfigBean;
import com.esgyn.util.WriteUtil;

public class QueryConfig extends HttpServlet {
	
	
	private static final long serialVersionUID = 1L;

    public QueryConfig() {
    }

    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<ConfigBean> list =new ArrayList<ConfigBean>();
		String path =request.getRealPath("configer");
				System.out.println(path);
				File file = new File(path);	
				InputStream in = null;
				String absolutepath =null;
                String[] filelist = file.list();
                if(file.list().length>0){
	                for (int i = 0; i < filelist.length; i++) {
	                	ConfigBean configBean =new ConfigBean();
	                    File readfile = new File(path + "\\" + filelist[i]);
	                    absolutepath = readfile.getAbsolutePath();
	                    configBean.setFileName(readfile.getName());
	                    in = new FileInputStream(absolutepath);
	                    Properties prop = new Properties();
	                    prop.load(in);
	                    list.add(configBean);
	                }
                }
                
                WriteUtil.flushStr(response,list);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
