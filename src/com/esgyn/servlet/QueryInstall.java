package com.esgyn.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.esgyn.util.WriteUtil;

public class QueryInstall extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public QueryInstall() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Random r = new Random();  
		List<HashMap<String,String>> list = new ArrayList<HashMap<String,String>>();
		for (Integer i = 0; i < 4; i++) {
			HashMap<String,String> map = new HashMap<String,String>();
			map.put("id",i.toString());
			map.put("name","name"+i);
			map.put("rate",r.nextInt(100)+"%");
			list.add(map);
		}
		WriteUtil.flushStr(response,list);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
