---
title: Doppelganger Protection
---

# Doppelganger Protection

## What is Doppelganger Protection?

Doppelganger Protection is a critical security feature in the Ethereum staking ecosystem. It helps to prevent a situation where a validator might inadvertently be running in two different places simultaneously. This scenario is a [slashable offense](../07-glossary/slashing.md) and leads to serious penalties for the validator in the form of a loss of staked ETH. The Doppelganger protection mechanism ensures that only one instance of a validator is active at any given time, safeguarding the validator’s operations and maintaining network integrity.

## How Does Doppelganger Protection Work?

Doppelganger Protection works by implementing a series of checks to confirm that a validator is not active elsewhere before starting its operations. When a validator client is initiated, it checks the network for any evidence of its own activity. If another instance of the validator is found to be active, the client will halt its operations to avoid double-signing blocks or attestations, which could lead to slashing penalties. This feature is crucial for validators who might accidentally start their validator client on multiple machines or in different locations.

## How to Activate/Deactivate Doppelganger Protection

🚨 Recommendations

It is highly recommended to **keep Doppelganger Protection enabled** to protect against accidental double-signing and potential slashing penalties. Deactivating this feature should only be done with a full understanding of the risks involved and in very specific circumstances where you are absolutely certain it is safe to do so.


Here are the steps to activate or deactivate this feature:

1. **Access the Node Page**: Navigate to the Node page. 
2. **Open Your Validator Client Settings**: Locate and click on the settings command of your validator client.
3. **Find the Doppelganger Protection Option**: In the settings modal, look for the option labeled "Doppelganger Protection."
4. **Activate/Deactivate the Option by Detoggling It**: To activate/deactivate Doppelganger Protection, toggle the switch to turn it off.
5. **Confirm & Restart**: Confirm your changes by clicking "Confirm & Restart", this will restart the validator client to apply the new settings.

