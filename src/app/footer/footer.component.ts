import { Component, OnInit } from '@angular/core';
import{ faLinkedin, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
   myfacebookIcon = faFacebook;
   mylinkedIcon = faLinkedin;
   mytwitterIcon = faTwitter;
   myinstagramIcon = faInstagram;
   
      constructor(){}
      ngOnInit(): void {
        
      }
}