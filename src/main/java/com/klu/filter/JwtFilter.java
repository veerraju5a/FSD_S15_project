package com.klu.filter;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.klu.utils.JwtUtil;

import java.io.IOException;


//@Component
public class JwtFilter implements Filter {
	
	 @Autowired
	 private JwtUtil jwtUtil;
	 
	 
	 protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
	     String path = request.getRequestURI();
	     return path.startsWith("/user/register") || path.startsWith("/user/login"); // ✅ Skip these paths
	 }

	    @Override
	    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
	        HttpServletRequest request = (HttpServletRequest) req;
	        String authHeader = request.getHeader("Authorization");

	        if (authHeader != null && authHeader.startsWith("Bearer ")) {
	            String token = authHeader.substring(7);
	            if (jwtUtil.validateToken(token)) {
	                chain.doFilter(req, res);
	                return;
	            }
	        }

	        HttpServletResponse response = (HttpServletResponse) res;
	        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
	        response.getWriter().write("Unauthorized1");
	    }

}
