package com.example.foodieapi.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.foodieapi.Entity.Comment;
import com.example.foodieapi.Entity.User;
import com.example.foodieapi.Repository.CommentRepo;

@Service
public class CommentService {

	@Autowired
	CommentRepo commentRepo;
	
	@Autowired
	UserService userService;
	
	public Comment saveComment(Comment comment) {
		Date date=new Date();
		long time=date.getTime();
		Timestamp dateTime=new Timestamp(time);
		
		comment.setCommentID(UUID.randomUUID());
		comment.setTimestamp(dateTime);
		return commentRepo.save(comment);
	}
	
	public ArrayList<Comment> getAllComment(UUID postID){
		ArrayList<Comment> result=new ArrayList<Comment>();
		result=commentRepo.findAllByPostID(postID);
		return result;
	}
}
