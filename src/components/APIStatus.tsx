'use client';
import { useEffect, useState } from 'react';
import {Api, type Region} from '../lib/api';
import { receiveMessageOnPort } from 'worker_threads';

export default function APIStatus(){
    const [ping, setPing] = useState<string>('loading...');
    const [regions, setRegions] = useState<Region[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const loadRegions = async () =>{
        setRegions([]);
        setStatus("loading...");
        setError(null);
        try{
            const data = await Api.getRegions();
            setRegions(data);
            setStatus("success");
        }
        catch(error: any){
            setError(String(error?.message ?? error));
            setStatus("error");
        }
    }

    return (
        <>
            <h2>API Status</h2>
            

            <button onClick={loadRegions}>Load Regions</button>
            {status === "success" && (
                <span style={{color: "green", marginLeft: 8}}>Ok</span>
            )}
            {status === "error" && (
                <span style={{color: "red", marginLeft: 8}}>Error</span>
            )}
            {regions?.length && (
                <ul>
                    {regions.map(region => (
                        <li key={region.id}>{region.id}: {region.name}</li>
                    ))}
                </ul>

            )}
        </>
    )
}