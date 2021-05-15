cd app
    
    
Get-ChildItem ..\samples\src | foreach { 
    ng generate module blocks/$_
    ng generate component --module blocks/$_ blocks/$_ 
}