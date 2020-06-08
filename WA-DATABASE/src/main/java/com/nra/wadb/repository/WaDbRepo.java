package com.nra.wadb.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nra.wadb.models.Book;

public interface WaDbRepo extends JpaRepository<Book, Integer>{

	@Query(
		value="select * from Book b where b.author=:author order by b.title  LIMIT :count",
		nativeQuery = true
		)
	List<Book> findTopCountByAuthorOrderByTitle(@Param("author") String author,int count);

	@Query(
			value="select count(*) from Book b where b.author=:author",
			nativeQuery = true
			)
	int CountByAuthor(@Param("author") String author);
	
	
	@Modifying
    @Transactional
	@Query(
			value="delete  from Book  where author=:author order by title  LIMIT :count",
			nativeQuery = true
			)
	void deleteTopCountByAuthorOrderByTitle(String author, int count);
	
}
