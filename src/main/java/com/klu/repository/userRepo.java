package com.klu.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.model.User;

public interface userRepo extends JpaRepository<User, Integer> {
		boolean existsByEmail(String email);
		Optional<User> findByEmail(String email);
}
