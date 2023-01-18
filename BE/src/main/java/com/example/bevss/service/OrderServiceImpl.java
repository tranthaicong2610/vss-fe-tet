package com.example.bevss.service;

import com.example.bevss.dto.OrderDTO;
import com.example.bevss.dto.SearchOrderDTO;
import com.example.bevss.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository orderRepository;

//    @Override
//    public SearchOrderDTO searchOrder(String phone) {
//        return orderRepository.searchOrder(phone);
//    }

    @Override
    public List<SearchOrderDTO> listOrder(String phone) {
        return orderRepository.listOrder(phone);
    }

    @Override
    public List<OrderDTO> orderDetail(Long id) {
        return orderRepository.orderDetail(id);
    }


}
