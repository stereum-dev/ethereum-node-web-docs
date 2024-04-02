### Inactivity Leak

**Definition:** Inactivity Leak is a mechanism designed to prevent network stagnation due to a large number of validators being offline. If the network fails to finalize blocks for an extended period, an inactivity leak gradually reduces the staked ETH of all inactive validators. This penalty encourages validators to remain online and active, as continued inactivity leads to increasing losses of staked assets over time. The mechanism ensures the network remains resilient and can recover even if a significant proportion of validators goes offline.

**Category:** Staking

**Example:** During a prolonged period where the network cannot reach consensus because too many validators are offline, those validators' stakes start to 'leak' or diminish. This ensures that even if many validators are offline, they have a strong incentive to come back online and participate in the consensus process to stop further losses.

**External Resources:**
- [Consensus Mechanisms and Inactivity Leak](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/)