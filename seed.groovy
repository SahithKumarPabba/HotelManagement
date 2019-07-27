def folder='HotelManagement'        //This is the folder structure defined in Jenkins

job("$folder/build_bookingService") {
  label('autoscale')
//This is where we tell the build where to get the source from
  multiscm {
    git {
      remote {
        name('origin')
        url('ssh://git@github.com:SahithKumarPabba/HotelManagement.git')      
        credentials('xxxxx')
      }
      branch('master')
    }
  }
//This tells Jenkins to check for changes every 10 minutes
  triggers {
    scm('H/10* * * * *') //
  }
 
  wrappers {
//This is where we tell Jenkins to run the build in our slave container
    buildInDocker {
      dockerfile('./slave/')     
      volume('/var/run/docker.sock', '/var/run/docker.sock')
      userGroup('2000')
      verbose()
    }
 
    ansiColorBuildWrapper {
      colorMapName('XTerm')
      defaultFg(15)
      defaultBg(1)
    }
//This line lables the builds with the container name and version
      buildName('${ENV,var="container_name"} ${ENV,var="version"}')
  }
//This is where we actually do the build.
  steps {
    // Pull the latest jenkins-scripts
    shell('if [ -d $scripts ]; then rm -rf $scripts; fi && git clone $scripts_repo')
         
    
    // Run sonarqube scanner
    conditionalSteps {
      condition {
        status('SUCCESS', 'SUCCESS')
        steps{
          sonarRunnerBuilder{
            project 'sonar-project.properties'
            properties 'sonar.projectVersion=$version_prefix.$BUILD_NUMBER'
            jdk '(Inherit From Job)'
            task 'scan'     
          }
        }
      }
    }
   // Build the container
    shell('bash jenkins-scripts/build-container-step.sh')

  }
}
