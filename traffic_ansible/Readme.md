# Traffic Control Ansible playbook

## InfluxDB

A provided playbook to install clustered InfluxDB (3 nodes). It will install 0.10.0-1 by default directly from InfluxDB web site (see roles/influxdb/defaults/main.yml).

The following variable can be overriden in group_vars

### Install via HTTP

``` 
influxdb_version: https://s3.amazonaws.com/influxdb/influxdb-0.10.0-1.x86_64.rpm
influxdb_config_template: influxdb-0.10.0-1.conf.j2
```

### Install via YUM (already downloaded and part of an existing repo)

This is a 0.9.6 example

```
influxdb_version: influxdb-0.9.6-1
influxdb_config_template: influxdb-0.9.6-1.conf.j2
```

## inventory and host_vars

An ansible inventory needs created per the following :

[influxdb]
influx1
influx2
influx3
