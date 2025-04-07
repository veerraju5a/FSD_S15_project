package com.klu.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.klu.model.User;
import com.klu.repository.userRepo;
import com.klu.utils.JwtUtil;

@Service
public class UserService {
	
	@Autowired
	private userRepo UserRepo;
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public String registerUser(User user) {
		if(UserRepo.existsByEmail(user.getEmail())) {
			return "Email already exists";
		}else
		{
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			UserRepo.save(user);
			return "User Registered successfully";
		}
	}
	public String loginUser(String email, String password) {
	    Optional<User> userOptional = UserRepo.findByEmail(email);
	    if (userOptional.isPresent()) {
	        User user = userOptional.get();

	        if (passwordEncoder.matches(password, user.getPassword())) {  // ✅ Compare hashed passwords
	            return jwtUtil.generateToken(user.getEmail());
	        }
	    }
	    return null;
	}

}
