package app.controller;

import app.entity.Coleta;
import app.entity.Exam;
import app.service.ColetaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/coleta")
@CrossOrigin("https://labclin-fawn.vercel.app/:5173")
public class ColetaController {

    @Autowired
    ColetaService coletaService;

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody Coleta coleta){
        try{
            String msg = this.coletaService.save(coleta);
            return new ResponseEntity<String>(msg, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@RequestBody Coleta coleta, @PathVariable Long id){
        try{
            String msg = this.coletaService.update(coleta,id);
            return new ResponseEntity<String>(msg, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        try{
            String msg = this.coletaService.delete(id);
            return new ResponseEntity<String>(msg, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/findAll")
    public ResponseEntity<List<Coleta>> listAll(){
        try{
            List<Coleta> coletas = this.coletaService.listAll();
            return new ResponseEntity<List<Coleta>>(coletas, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Coleta> findById(@PathVariable Long id){
        try{
            Coleta coleta = this.coletaService.findById(id);
            return new ResponseEntity<Coleta>(coleta, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
