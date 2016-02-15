# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  
  #config.vm.box = "bento/centos-6.7"
  config.vm.box = "bento/centos-7.2"

  config.vm.define "influx1" do |box|
   box.vm.hostname = "influx1.kabletown.net"
   box.vm.network "private_network", ip: "192.168.50.101"
  end

  config.vm.define "influx2" do |box|
   box.vm.hostname = "influx2.kabletown.net"
   box.vm.network "private_network", ip: "192.168.50.102"
  end

  config.vm.define "influx3" do |box|
   box.vm.hostname = "influx3.kabletown.net"
   box.vm.network "private_network", ip: "192.168.50.103"
  end

  config.vm.provision "ansible" do |ansible|
    ansible.sudo = true
    ansible.playbook = "traffic_ansible/vagrant.yml"
    ansible.groups = {
      "influxdb" => ["influx1","influx2","influx3"],
      "vagrant:children" => ["influxdb"]
    }
  end

end
