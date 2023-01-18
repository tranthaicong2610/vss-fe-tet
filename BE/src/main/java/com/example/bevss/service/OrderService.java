package com.example.bevss.service;

import com.example.bevss.dto.OrderDTO;
import com.example.bevss.dto.SearchOrderDTO;
import java.util.List;
import java.util.Objects;

public interface OrderService {
//    SearchOrderDTO searchOrder(String name);

    List<SearchOrderDTO> listOrder(String phone);

    List<OrderDTO> orderDetail(Long id);

}
