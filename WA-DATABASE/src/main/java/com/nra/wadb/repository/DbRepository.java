package com.nra.wadb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nra.wadb.models.DbInfo;

public interface DbRepository extends JpaRepository<DbInfo, String>{

}
