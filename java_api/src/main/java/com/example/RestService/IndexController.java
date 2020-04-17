package com.example.RestService;

//Mapping request
import org.springframework.web.bind.annotation.RequestMapping;
//Request Method
import org.springframework.web.bind.annotation.RequestMethod;
//Turning class into a controller with dependency
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {

    @RequestMapping(method = RequestMethod.GET, path = "/")
    // First Method
    public String Home() {
        return "Welcome to the Index page of our API," +
                " you can configure this page to return any value you want, " +
                "it can be a sort of Readme file containing all of the request of your API or " +
                "display Data sets :) its all up to you.";
    }
    @RequestMapping(method = RequestMethod.GET, path= "/secondpage")
    public String SecondPage() {
        return "Return Whatever value you want, if return value not string change the method value type";
    }
    @RequestMapping(method = RequestMethod.GET, path= "/thirdpage")
    public String ThirdPage() {
        return "You can set method to POST Too :), by just replacing RequestMethod.POST " +
                "Or even PATCH If you want to update value with requestMethod.PATCH and of course," +
                "RequestMethod.DELETE for deleting value  ";
    }
}
