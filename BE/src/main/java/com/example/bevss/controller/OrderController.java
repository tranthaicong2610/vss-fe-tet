package com.example.bevss.controller;

import com.example.bevss.dto.OrderDTO;
import com.example.bevss.dto.SearchOrderDTO;
import com.example.bevss.repository.OrderRepository;
import com.example.bevss.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
//    private final OrderRepository orderRepository;

    @GetMapping("")
    ResponseEntity<List<SearchOrderDTO>> listOrder(@RequestParam(required = false) String phone){
        return ResponseEntity.ok(orderService.listOrder(phone));
    }

    @GetMapping("/{id}")
    ResponseEntity<List<OrderDTO>> orderDetail(@PathVariable Long id ){
        return ResponseEntity.ok(orderService.orderDetail(id));
    }

//    @GetMapping("/search")
//    SearchOrderDTO searchOrder(@RequestParam String phone){
//        return orderService.searchOrder(phone);
//    }


}
