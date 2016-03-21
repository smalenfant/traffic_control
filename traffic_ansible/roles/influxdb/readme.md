# Role: influxdb

## Tasks

* Installs InfluxDB
* Creates the influxdb.conf
* Starts and enables influxdb
* Creates the Influx DBs

## Variables - defaults/main.yml

Some Continous queries examples

```
elsewhere		CREATE CONTINUOUS QUERY elsewhere ON deliveryservice_stats BEGIN SELECT mean(value) INTO deliveryservice_stats.monthly.:MEASUREMENT FROM deliveryservice_stats.daily./tps/ GROUP BY time(1m), * END
status			CREATE CONTINUOUS QUERY status ON deliveryservice_stats BEGIN SELECT mean(value) INTO deliveryservice_stats.monthly.:MEASUREMENT FROM deliveryservice_stats.daily./status/ GROUP BY time(1m), * END
```
