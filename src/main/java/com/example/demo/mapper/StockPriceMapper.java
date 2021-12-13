package com.example.demo.mapper;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.example.demo.dto.StockPriceDto;
import com.example.demo.model.StockPrice;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

@Component
public class StockPriceMapper
{
    public StockPriceDto toStockPriceDto(StockPrice stockPrice)
    {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        StockPriceDto stockPriceDto = mapper.map(stockPrice, StockPriceDto.class);
        return stockPriceDto;
    }

    public StockPrice toStockPrice(StockPriceDto stockPriceDto)
    {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        StockPrice stockPrice = mapper.map(stockPriceDto, StockPrice.class);
        return stockPrice;
    }

    public List<StockPriceDto> toStockPriceDtos(List<StockPrice> stockPrices)
    {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        List<StockPriceDto> stockPriceDtos = Arrays.asList(mapper.map(stockPrices, StockPriceDto[].class));
        return stockPriceDtos;
    }
}