package com.example.foodieapi.Repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.cassandra.repository.CassandraRepository;

import com.example.foodieapi.Entity.Status;

public interface StatusRepo extends CassandraRepository<Status, UUID> {

	Status save(Status status);
	ArrayList<Status> findAll();
}
