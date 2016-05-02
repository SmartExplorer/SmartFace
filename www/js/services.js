angular.module('smartface.services', [])

.service('Global', function () {
	var deviceList = [
	                  {
	                	id:0,
	                	name:'Air Conditioner',
	                	type:'aircon'
	                  },
	                  {
	                	 id:1,
	                	 name:'Television',
	                	 type:'tv'
	                  },
	                  {
	                	  id:2,
	                	  name:'Vacuum Cleaner',
	                	  type:'vacuum'
	                  }];
	return {
		getDevices:function () {
			return deviceList;
		},
		deleteDevice:function($id) {
			deviceList.splice($id, 1);
		}
	};
});