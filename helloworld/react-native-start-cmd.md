## Open 
    	 /Downloads/android-sdk-linux/tools 

## Set or Just Export ANDROID_HOME Environment Variable
# run 
	export ANDROID_HOME=~/Downloads/android-sdk-linux/
	export PATH=$PATH:~/Downloads/android-sdk-linux/platform-tools
	export PATH=$PATH:~/Downloads/android-sdk-linux/tools
  
    	android avd

## Open  
	/Documents/react-native-app/helloworld

## Set or Just Export ANDROID_HOME Environment Variable
# run 
	export ANDROID_HOME=~/Downloads/android-sdk-linux/
	export PATH=$PATH:~/Downloads/android-sdk-linux/platform-tools
	export PATH=$PATH:~/Downloads/android-sdk-linux/tools

	react-native run-android

	react-native start

## ERROR 
  when  ERROR  watch /home/zinios/Documents/react-native-app/helloworld/android/app/build/tmp/expandedArchives/classes.jar_bbv2xgeysf68ftvpeirpe3oqq/com/facebook ENOSPC

# run command 
	echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p


