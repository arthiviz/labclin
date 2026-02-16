package app.controller;

import app.entity.Exam;
import app.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exam")
@CrossOrigin("*")
public class ExamController {

    @Autowired
    ExamService examService;

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody Exam exam){
        try{
            String msg = this.examService.save(exam);
            return new ResponseEntity<String>(msg, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@RequestBody Exam exam, @PathVariable Long id){
        try{
            String msg = this.examService.update(exam,id);
            return new ResponseEntity<String>(msg, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        try{
            String msg = this.examService.delete(id);
            return new ResponseEntity<String>(msg, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/findAll")
    public ResponseEntity<List<Exam>> listAll(){
        try{
            List<Exam> exams = this.examService.listAll();
            return new ResponseEntity<List<Exam>>(exams, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Exam> findById(@PathVariable Long id){
        try{
            Exam exam = this.examService.findById(id);
            return new ResponseEntity<Exam>(exam, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
