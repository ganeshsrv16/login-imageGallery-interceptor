export class ServersService {
  private servers = [
    {
      
      
      'id':1020,
              'name': 'anurag',
      
              'branch': 'cse',
      
              'favlang': 'java',
             'per':50,
             'state':'telangana'
            
      
            },
      
            {
              'id':1021,
              'name': 'reddy',
      
              'branch': 'cse',
      
              'favlang': 'php',
              'per':68,
              'state':'telangana'
             
      
            },
            {
              'id':1022,
                      'name': 'Supraja',
              
                      'branch': 'cse',
              
                      'favlang': 'php',
                      'per':62,
                      'state':'telangana'
                     
              
                    },
      
            {
              'id':1023,
              'name': 'Ganesh Srv',
      
              'branch': 'cse',
      
              'favlang': 'C',
              'per':25,
              'state':'telangana'
         
      
            },
      
            {
              'id':1024,
              'name': 'Sriman',
      
              'branch': 'cse',
      
              'favlang': 'java',
              'per':70,
              'state':'telangana'
              
      
            },
      
            {
              'id':1025,
              'name': 'miller',
      
              'branch': 'cse',
      
              'favlang': 'java',
              'per':70,
              'state':'telangana'
             
      
            },
            {
              'id':1026,
              'name': 'akhil',
      
              'branch': 'cse',
      
              'favlang': 'java',
              'per':63,
              'state':'telangana'
              
      
            },
            {
              'id':1027,        
              'name': 'anu',
      
              'branch': 'cse',
      
              'favlang': 'Python',
              'per':70,
              'state':'telangana'
             
            },
            {
              'id':1028,
              'name': 'Teja',
      
              'branch': 'mech',
      
              'favlang': 'C',
              'per':80,
              'state':'andhra pradesh'
              
      
            },
            {
              'id':1029,
              'name': 'Ammaresh',
      
              'branch': 'civil',
      
              'favlang': 'php',
              'per':61,
              'state':'Mumbai'
              
      
            },
            {
      
              'name': 'Ashish',
      
              'branch': 'cse',
      
              'favlang': 'Python',
              'per':75,
              'state':'pune',
              'id':1030
      
            },
            {
              'id':1031,
              'name': 'sravan',
      
              'branch': 'ecm',
      
              'favlang': 'Python',
              'per':85,
              'state':'telangana'
             
      
            }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {name: string , branch:string, favlang:string,per:number, state: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
     server.branch = serverInfo.branch;
      server.favlang = serverInfo.favlang;
      server.per = serverInfo.per;
      server.state = serverInfo.state;
    }
  }
}
