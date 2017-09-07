package com.gms.web.common;


import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import com.gms.web.complex.PathFactory;


/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
   
   private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
   
   @RequestMapping("/")
   public String home(Model model,HttpSession session) {
      logger.info("Welcome home! The client locale is {}.");
         
      String pattern = "yyyy년-MM월-dd일 hh시 mm분 ss초";
      SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
      String date = simpleDateFormat.format(new Date());
      session.setAttribute("path", PathFactory.create());
      
      
      return "public:common/home.tiles";
   }
   
}