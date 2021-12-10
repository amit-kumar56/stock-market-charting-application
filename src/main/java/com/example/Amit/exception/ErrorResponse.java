package com.example.Amit.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponse
{
    private String errorMessage;
    private int statusCode;
    private Long timeHappened;
}
