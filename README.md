# Resource Requests/Limits Demo

## Introduction

Setting resource requests and limits properly is the very first step towards building a stable and efficient Kubernetes cluster. Setting them incorrectly can lead to very interesting and unstable situations. The goal of these demos is to show different situations that can be cause by incorrect settings.

## The Cluster

- GKE - 1.21.6-gke.1500
- n2-standard-2 (2 CPU, 8GB Mem)
- node autoscaling enabled 1-2 nodes per zone
- 3 zones

## Scenarios

### Demo 1 - no requests or limits

Start up both cpu and memory eaters with no requests or limits.

Steps:
- reckoner plot demo-1.course.yaml -a
- run loadtest
- kubectl get po -A

Symptoms:
- Pods get evicted continuously when trying to run a lot of them
- HPAs do not function
- No effect on the existing app because of QoS and Eviction policies

### Demo 2 - cpu limits too low

Change the original app to have really low CPU limits. Observe behavior and run tests.

Steps:
- Set yelb-appserver to a limit of 10m and observe probes failing
- Set yelb-appserver to a limit of 40m and loadtest a couple times
- Set yelb-appserver to a limit of 300m and loadtest

Symptoms:
- CPU Throttling - Request time goes _way_ up

### Demo 3 - memory limits too low

Symptoms:
- OOM Kill

### Demo 4 - requests and limits are far apart

Steps:
- Remove stress namespace
- Set yelb appserver request to 10 and limit to 500 (nothing changes right now)
- Set yelb appserver hpa max to 200
- Hit with really hard load. 500vus and 10000 iterations (would go more vus, but I hit too many open files) `k6 run load.js -i 10000 --vus=200`

Symptoms:
- Pods scale too quickly. HPA percentages are on request, not limit.
- Nodes can become over-provisioned.

## Tools Used

[LoadImpact](https://k6.io/) - By far my favorite easy load testing tool. Has a _ton_ of functionality, but also satisfies the quick and easy.

[k9s](https://k9scli.io/) - A TUI (text-based user interface) for Kubernetes.

[yelb](https://github.com/mreferre/yelb) - This is a really great multi-tiered application for examples and testing.

[kube-capacity](https://github.com/robscott/kube-capacity) - Shows your current resource allocation and utilization
