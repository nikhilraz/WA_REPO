package com.nra.AdminServer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nra.AdminServer.models.Threshold;

public interface Repo extends JpaRepository<Threshold, Integer> {
	

}
