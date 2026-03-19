package app.controller;

import app.entity.Medic;
import app.service.MedicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("https://labclin-fawn.vercel.app")
@RequestMapping("/medic")
public class MedicController {

    @Autowired
    private MedicService medicService;

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody Medic medic){
        try{
            String msg = this.medicService.save(medic);
            return new ResponseEntity<String>(msg,HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        try{
            String msg = this.medicService.delete(id);
            return new ResponseEntity<String>(msg,HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@RequestBody Medic medic,@PathVariable Long id){
        try{
            String msg = this.medicService.update(medic,id);
            return new ResponseEntity<String>(msg,HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/findAll")
    public ResponseEntity<List<Medic>> findAll(){
        try{
            List<Medic> medicos = this.medicService.findAll();
            return new ResponseEntity<List<Medic>>(medicos,HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/findById")
    public ResponseEntity<Medic> findById(@PathVariable Long id){
        try{
            Optional<Medic> medic = this.medicService.findById(id);
            return new ResponseEntity<Medic>(medic.get(),HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


}
