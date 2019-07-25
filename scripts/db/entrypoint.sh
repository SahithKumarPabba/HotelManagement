#!/bin/bash
source properties

while ! /opt/mssql-tools/bin/sqlcmd -S 0.0.0.0 -U sa -P "admin@123"; do
  sleep 1
done

echo importing data...

for entry in "./*.sql"
do
  echo executing $entry
  /opt/mssql-tools/bin/sqlcmd -S 0.0.0.0 -U sa -P $PWD -i $entry
done