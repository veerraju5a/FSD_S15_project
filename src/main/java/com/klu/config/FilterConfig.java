package com.klu.config;

import com.klu.filter.JwtFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {
	

	@Bean
    public JwtFilter jwtFilter() {  // ✅ Define JwtFilter as a Bean
        return new JwtFilter();
    }
}
