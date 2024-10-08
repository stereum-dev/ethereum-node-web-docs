# Client Options
## Execution Clients
### Besu
Option | Command | Description | Default Value
|---|---|---|---|
Gas Limit | --target-gas-limit | Overwrites default gas limit | No default value
P2P Host Address | --p2p-host | Address for P2P | 0.0.0.0
P2P Port | --p2p-port |	Port for P2P |	30303
RPC HTTP Host Address | --rpc-http-host | Address for RPC HTTP |	0.0.0.0
RPC HTTP Port | --rpc-http-port |	Port for RPC HTTP |	8545
RPC Websocket Host Address | --rpc-ws-host |	Address for RPC websocket |	0.0.0.0
RPC Websocket Port | --rpc-ws-port |	Port for RPC websocket |	8546
Metrics Host Address | --metrics-host |	Address for metrics exporter |	0.0.0.0
Metrics Port | --metrics-port |	Port for metrics exporter |	9545
Engine RPC Port | --engine-rpc-port |	Port to provide consensus client APIS on |	8551
### Erigon
Option | Command | Description | Default Value
|---|---|---|---|
Gas Limit | --miner.gaslimit | Overwrites default gas limit | No default value
RPC Authentication Host Address | --authrpc.addr |	HTTP-RPC server listening interface for the Engine API |	0.0.0.0
RPC Authentication Port | --authrpc.port |	HTTP-RPC server listening port for the Engine API |	8551
HTTP Host Address | --http.addr |	Address for RPC HTTP |	0.0.0.0
HTTP Port | --http.port |	Port for RPC HTTP |	8545
Metrics Host Address | --metrics.addr |	Address for metrics exporter |	0.0.0.0
Metrics Port | --metrics.port |	Port for metrics exporter |	6060
Prune history | --prune | Prune history | true (h)*
Prune receipts | --prune | Prune receipts | false (r)*
Prune transaction | --prune | Prune transaction | true (t)*
Prune call traces | --prune | Prune call traces | true (c)*

*values are added to --prune as --prune=htc
### Geth
Option | Command | Description | Default Value
|---|---|---|---|
Gas Limit | --miner.gaslimit | Overwrites default gas limit | No default value
HTTP Host Address | --http.addr |	Address for RPC HTTP |	0.0.0.0
HTTP Port | --http.port |	Port for RPC HTTP |	8545
Websocket Host Address | --ws.addr |	Address for RPC websocket |	0.0.0.0
Websocket Port | --ws.port |	Port for RPC websocket |	8546
RPC Authentication Host Address | --authrpc.addr |	HTTP-RPC server listening interface for the Engine API |	0.0.0.0
RPC Authentication Port | --authrpc.port |	HTTP-RPC server listening port for the Engine API |	8551
Metrics Host Address | --metrics.addr |	Address for metrics exporter | 0.0.0.0	
Metrics Port | --metrics.port |	Port for metrics exporter |	6060
### Nethermind
Option | Command | Description | Default Value
|---|---|---|---|
Pruning Mode | --Pruning.Mode | Set pruning mode | Hybrid
Gas Limit | --Blocks.TargetBlockGasLimit | Overwrites default gas limit | No default value
Network Discovery Port | --Network.DiscoveryPort |	UDP port for P2P |	30303
Network P2P Port | --Network.P2PPort |	TCP port for P2P |	30303
RPC Host Address | --JsonRpc.Host |	HTTP-RPC server listening interface for the Engine API |	0.0.0.0
RPC Engine Host Address | --JsonRpc.EngineHost |	HTTP-RPC server listening port for the Engine API |	0.0.0.0
RPC Websocket Port | --JsonRpc.WebSocketsPort |	Port for RPC websocket |	8546
Metrics Port | --Metrics.ExposePort |	Port for metrics exporter |	6060
Available Space Check | --Pruning.AvailableSpaceCheckEnabled |	Enable available space check |	TRUE
Cache MB | --Pruning.CacheMb |	In-memory cache size in MB |	1024
Persistence Interval | --Pruning.PersistenceInterval |	Block persistance frequency |	8192
Pruning Boundary | --Pruning.PruningBoundary |	Past N states before state gets pruned |	64
Tracked Past Key Count Memory Ratio | --Pruning.TrackedPastKeyCountMemoryRatio |	Ratio of memory out of cacheMB |	0.1
Full Pruning Completion Behavior | --Pruning.FullPruningCompletionBehavior |	Behavior after pruning completion |	None
Disable Low Priority Writes | --Pruning.FullPruningDisableLowPriorityWrites |	Disable low priority writes |	FALSE
Max Degree Of Parallelism | --Pruning.FullPruningMaxDegreeOfParallelism | Max number of parallel tasks |	0
Memory Budget Mb | --Pruning.FullPruningMemoryBudgetMb |	Memory Budget in MB |	4000
Minimum Delay Hours | --Pruning.FullPruningMinimumDelayHours |	Minumum delay between prunes in hours |	240
Threshold Mb | --Pruning.FullPruningThresholdMb |	Threshold to trigger Full Prune in MB |	256000
Full Pruning Trigger | --Pruning.FullPruningTrigger |	Trigger for Full Prune |	StateDbSize
### Reth
Option | Command | Description | Default Value
|---|---|---|---|
Gas Limit | --max_cumulative_gas | Overwrites default gas limit | No default value
RPC Authentication Host Address | --authrpc.addr |	HTTP-RPC server listening interface for the Engine API |	0.0.0.0
RPC Authentication Port | --authrpc.port |	HTTP-RPC server listening port for the Engine API |	8551
Websocket Host Address | --ws.addr |	Address for RPC websocket |	0.0.0.0
Websocket Port | --ws.port |	Port for RPC websocket |	8546
HTTP Host Address | --http.addr |	Address for RPC HTTP |	0.0.0.0
HTTP Port | --http.port |	Port for RPC HTTP |	8545
Metrics Host Address/Port | --metrics |	Address and port for metrics exporter |	0.0.0.0:6060
## Consensus Clients
### Lighthouse
Option | Command | Description | Default Value
|---|---|---|---|
External IP Address | --enr-address | External IP Address | No default value
Disable ENR auto update | --disable-enr-auto-update | Disable ENR auto update | false
External TCP/UDP port | --enr-tcp-port, --enr-udp-port, --port | Port for TCP/UDP | 9000
Metrics Address | --metrics-address |	Address for metrics exporter |	0.0.0.0
HTTP Address | --http-address |	Address for the RESTful HTTP API |	0.0.0.0
Slasher | --slasher |	Runs a slasher alongside the beacon node |	Enabled by default
### Lodestar
Option | Command | Description | Default Value
|---|---|---|---|
External IP Address | --enr.ip | External IP Address | No default value
Enable NAT | --nat | Enable NAT auto update | false
External TCP/UDP port | --enr.tcp.port, --enr.udp.port, --port | Port for TCP/UDP | 9000
Metrics Host Address | --metrics.address |	Address for metrics exporter |	0.0.0.0
Metrics Port | --metrics.port | Port for metrics exporter |	8008
Rest Address | --rest.address | Address for HTTP API |	0.0.0.0
Rest Port | --rest.port | Port for HTTP API |	9596
### Nimbus
Option | Command | Description | Default Value
|---|---|---|---|
Pruning Mode | --history | Select pruning mode | prune
External IP Address | --nat:extip | External IP Address | No default value
Disable ENR auto update | --enr-auto-update | Enable ENR auto update | false
External TCP/UDP port | --tcp-port, --udp-port | Port for TCP/UDP | 9000
Metrics Address | --metrics-address | Address for metrics exporter |	0.0.0.0
Metrics Port | --metrics-port | Port for metrics exporter |	8008
Rest Address | --rest-address |	Address for HTTP API |	0.0.0.0
Rest Port | --rest-port |	Port for HTTP API |	5052
### Prysm
Option | Command | Description | Default Value
|---|---|---|---|
External IP Address | --p2p-host-ip | External IP Address | No default value
External TCP/UDP port | --p2p-tcp-port,--p2p-udp-port | Port for TCP/UDP | 13001
Monitoring Host Address | --monitoring-host |	Address for metrics exporter |	0.0.0.0
Monitoring Port | --monitoring-port |	Port for metrics exporter |	8080
RPC Host Address | --rpc-host |	Address for RPC listener |	0.0.0.0
GRPC Gateway Host Address | --grpc-gateway-host | Address for gateway server |	0.0.0.0
### Teku
Option | Command | Description | Default Value
|---|---|---|---|
RAM Usage Limit | JAVA_OPTS: -Xmx | RAM useage limit in GB | 6
External IP Address | --p2p-advertised-ip | External IP Address | No default value
External TCP/UDP port | --p2p-port, --p2p-advertised-port | Port for TCP/UDP | 9001
Metrics Interface Address | --metrics-interface | Address for metrics exporter |	0.0.0.0
Metrics Port | --metrics-port |	Port for metrics exporter |	8008
Rest API Interface Address | --rest-api-interface | Address for HTTP API |	0.0.0.0
Rest API Interface Port | --rest-api-port | Port for HTTP API |	5051
## Validator Clients
### Lighthouse
Option | Command | Description | Default Value
|---|---|---|---|
Default Fee Recipient | --suggested-fee-recipient | Set fee recipient | 0x0000000000000000000000000000000000000000
Doppelganger Protection | --enable-doppelganger-protection | Enable doppelganger protection | Added by default
Gas Limit | --gas-limit | Overwrites default gas limit | No default value
Metrics Address | --metrics-address |	Address for metrics exporter |	0.0.0.0
HTTP Address | --http-address |	Address for the RESTful HTTP API |	0.0.0.0
HTTP Port | --http-port |	Port for the RESTful HTTP API |	5062
### Lodestar
Option | Command | Description | Default Value
|---|---|---|---|
Default Fee Recipient | --suggestedFeeRecipient | Set fee recipient | 0x0000000000000000000000000000000000000000
Doppelganger Protection | --doppelgangerProtection | Enable doppelganger protection | TRUE
Gas Limit | --defaultGasLimit | Overwrites default gas limit | No default value
Metrics Address | --metrics.address |	Address for metrics exporter |	0.0.0.0
Metrics Port | --metrics.port |	Port for metrics exporter |	5064
Keymanager Address | --keymanager.address |	Address for key manager API |	0.0.0.0
Keymanager Port | --keymanager.port |	Port for key manager API |	5062
### Nimbus
Option | Command | Description | Default Value
|---|---|---|---|
Default Fee Recipient | --suggested-fee-recipient | Set fee recipient | 0x0000000000000000000000000000000000000000
Doppelganger Protection | --doppelganger-protection | Enable doppelganger protection | TRUE
Gas Limit | --suggester-gas-limit | Overwrites default gas limit | No default value
Keymanager Adress | --keymanager-address |	Address for key manager API | 0.0.0.0
Keymanager Port | --keymanager-port |	Port for key manager API |	5052
Metrics Address | --metrics-address |	Address for metrics exporter |	0.0.0.0
Metrics Port | --metrics-port |	Port for metrics exporter |	8108
### Prysm
Option | Command | Description | Default Value
|---|---|---|---|
Default Fee Recipient | --suggested-fee-recipient | Set fee recipient | 0x0000000000000000000000000000000000000000
Doppelganger Protection | --doppelganger-protection | Enable doppelganger protection | TRUE
Gas Limit | --suggester-gas-limit | Overwrites default gas limit | No default value
Monitoring Host Address | --monitoring-host |	Address for metrics exporter |	0.0.0.0
Monitoring Port | --monitoring-port |	Port for metrics exporter |	8081
RPC Host Address | --rpc-host |	Address for RPC listener |	0.0.0.0
GRPC Gateway Host Adress | --grpc-gateway-host |	Gateway address |	0.0.0.0
GRPC Gateway Port | --grpc-gateway-port |	Gateway port |	7500
### Teku
Option | Command | Description | Default Value
|---|---|---|---|
RAM Usage Limit | JAVA_OPTS: -Xmx | RAM useage limit in GB | 4
Default Fee Recipient | --suggested-fee-recipient | Set fee recipient | 0x0000000000000000000000000000000000000000
Doppelganger Protection | --doppelganger-protection | Enable doppelganger protection | TRUE
Gas Limit | --gas-limit | Overwrites default gas limit | No default value
Monitoring Host Address | --monitoring-host |	Address for metrics exporter |	0.0.0.0
Metrics Interface Address | --metrics-interface |	Address for metrics exporter |	0.0.0.0
Metrics Port | --metrics-port |	Port for metrics exporter |	8008
Rest API Interface Port | --validator-api-port |	Port for Rest API |	5052
