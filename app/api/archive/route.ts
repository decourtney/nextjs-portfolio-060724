import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  region: process.env.AWS_REGION,
});

export async function GET(): Promise<NextResponse> {
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: "nextjs-portfolio/archives.json",
  });

  try {
    const response = await s3.send(command);
    const str = await response.Body?.transformToString();

    const jsonData = JSON.parse(str || "{}");

    return NextResponse.json(jsonData);
  } catch (error) {
    console.error("Error fetching image:", error);
    return new NextResponse("Error fetching projects");
  }
}
