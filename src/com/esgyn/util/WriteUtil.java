package com.esgyn.util;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.connector.Request;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

public class WriteUtil {

	
	public static void flushStr(HttpServletResponse response, Object resultList) {
		PrintWriter writer = null;
		String outStr = null;
		JsonConfig jsonConfig = new JsonConfig();
		try {
			// 防止自包含
			jsonConfig.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);
			if (resultList instanceof List) {
				JSONArray jsonObj = JSONArray.fromObject(resultList, jsonConfig);
				outStr = jsonObj.toString();
			} else if (resultList instanceof Map) {
				JSONObject json = JSONObject.fromObject(resultList, jsonConfig);
				outStr = json.toString();
			} else {
				JSONObject json = JSONObject.fromObject(resultList, jsonConfig);
				outStr = json.toString();
			}
			System.out.println(outStr);
			writer =response.getWriter();
			writer.print(outStr);
			System.out.println(outStr);
			writer.flush();
		} catch (IOException ioe) {
			outStr = ioe.getMessage();
		} catch (Exception e) {
			outStr = e.getMessage();
		} finally {
			if (writer != null)
				writer.close();
		}
	}
	
	
	/**
	 * 获得paramMap
	 */
	public static  Map<String, String> getParamMap(HttpServletRequest request) {
		Enumeration<String> paramNames = request.getParameterNames();
		Map<String,String> paramMap = new HashMap<String, String>();
		while (paramNames.hasMoreElements()) {
			String paramName = paramNames.nextElement();

			String[] paramValues = request.getParameterValues(paramName);
			if (paramValues.length == 1) {
				String paramValue = paramValues[0];
				if (paramValue.length() != 0) {
					paramMap.put(paramName, paramValue);
				}
			}
		}
		return paramMap;
	}
}
