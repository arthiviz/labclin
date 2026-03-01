package app.controller;

import app.entity.Client;
import app.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/client")
@CrossOrigin("https://labclin-fawn.vercel.app/:5173")
public class ClientController {

    @Autowired
    ClientService clientService;

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody Client client){
        try{
            String msg = this.clientService.save(client);
            return new ResponseEntity<String>(msg,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@RequestBody Client client, @PathVariable Long id){
        try{
            String msg = this.clientService.update(client,id);
            return new ResponseEntity<String>(msg,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        try{
            String msg = this.clientService.delete(id);
            return new ResponseEntity<String>(msg,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/findAll")
    public ResponseEntity<List<Client>> listAll(){
        try{
            List<Client> clients = this.clientService.listAll();
            return new ResponseEntity<List<Client>>(clients,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Client> findById(@PathVariable Long id){
        try{
            Client client = this.clientService.findById(id);
            return new ResponseEntity<Client>(client,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
