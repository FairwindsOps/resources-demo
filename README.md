# Resource Requests/Limits Demo

## Introduction

Setting resource requests and limits properly is the very first step towards building a stable and efficient Kubernetes cluster. Setting them incorrectly can lead to very interesting and unstable situations. The goal of these demos is to show different situations that can be cause by incorrect settings.

Scenario:

I have an existing cluster that has a service running in it that is properly configured. Resource requests/limits, HPA, cluster autoscaling, etc. I am deploying a _new_ service to that cluster. This service contains two different deployments, one is CPU intensive, one is Memory intensive.

## The Cluster

- GKE - 1.21.6-gke.1500
- n2-standard-2 (2 CPU, 8GB Mem)
- node autoscaling enabled 1-3 nodes per zone
- 3 zones

## Demo 1 - no requests or limits

Start up both cpu and memory eaters with no requests or limits.

Symptoms:
- Pods get evicted continuously when trying to run a lot of them
- HPAs do not function
- No effect on the existing app because of QoS and Eviction policies

## Demo 2 - cpu limits too low

Change the original app to have really low CPU limits. Observe behavior and run tests.

Symptoms:
- CPU Throttling

## Demo 3 - memory limits too low

Symptoms:
- OOM Kill

## Demo 4 - requests with no limits

## Demo 5 - requests and limits are far apart



## Commands

### Generate Yelb Traffic

`setInterval(() => document.getElementsByClassName('btn-primary')[Math.floor(Math.random() * 4)].click(), 100)`
