import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// handle 404
export function GET(request: NextRequest) {

    console.log("Cron running")



  return NextResponse.json(
    {
      
    },
    {
      status: 200,
    },
  );
}