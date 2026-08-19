# PressAI <Badge type="tip" text="Py/React" />

## Purpose

PressAI consolidates the data generated around a recorded video. A video is sent to a generation
API, which returns a set of files: the original video and audio, thumbnails, a transcript,
subtitles, a summary, and translated or subtitled versions in several languages. My job was to
analyze that whole output and bring it together into a single, structured, usable form.

The generation itself (transcription, subtitles, translation) was not my part of the project. My
work was everything around it: making sense of the produced files and exposing them cleanly.

## Technologies

- Python
- React

## How it works

The file naming follows a strict convention that I agreed on with the developer in charge of the
generation side. Settling that convention together was what made the whole consolidation
possible, since my parsing logic relies entirely on it to identify each file. Each processed
video ends up as a folder of files named that way, for example:

3efd4801-..._20251113_152123_originalVideo.mp4
3efd4801-..._20251113_152123_thumbnail_0.jpg
3efd4801-..._20251113_152158_transcript_fr.txt
3efd4801-..._20251113_152204_subtitles_fr.srt
3efd4801-..._20251113_152210_subtitles_it.srt
3efd4801-..._20251113_152213_subtitledVideo_it.mp4


A Python script walks the folder, reads each filename to work out what the file is (original
video, audio, thumbnail, transcript, subtitles, summary, and so on) and, where relevant, which
language it belongs to. It then consolidates everything into one normalized JSON model that the
rest of the application can consume. React provides the interface, giving users a clear way to
browse the grouped media and data.

```python
def folder_to_single_media_json(folder_path, recursive=True):
    root = Path(folder_path)
    if not root.exists():
        raise FileNotFoundError(f"{root} does not exist")

    iterator = root.rglob('*') if recursive else root.iterdir()
    result = {
        "id": root.name,
        "originalVideo": None,
        "originalAudio": None,
        "subtitles": [],
        "transcripts": [],
        "thumbnails": [],
        "subtitledVideos": [],
        "languages": [],
        "summary": [],
        # ...
    }

    for p in iterator:
        if not p.is_file():
            continue
        rel_path = str(p.relative_to(root).as_posix())
        parts = p.stem.split('_')
        type_part = parts[3].lower() if len(parts) >= 3 else None
        lang = parts[4] if len(parts) > 4 else None

        match type_part:
            case "subtitles":
                result["subtitles"].append(f"media/{root.name}/{rel_path}")
                if lang and lang not in result["languages"]:
                    result["languages"].append(lang)
            case "transcript":
                result["transcripts"].append(f"media/{root.name}/{rel_path}")
                if lang and lang not in result["languages"]:
                    result["languages"].append(lang)
            case "thumbnail":
                result["thumbnails"].append(f"media/{root.name}/{rel_path}")
            # ... other file types
            case _:
                continue

    return json.dumps(result, ensure_ascii=False, indent=2)
```

## Operational Competencies Acquired

I started by defining the project's requirements and objectives. In particular, I agreed with the
developer handling the generation side on the file naming convention, which set the interface
contract between their output and my processing. That agreement framed exactly which files would
be produced, what each represented, and how my side would recognize them.

The heart of the work was analyzing that varied, semi-structured output and turning it into a
single data model: I designed a JSON structure that groups each video's files by type and
language, and wrote the Python parsing logic that fills it from the naming convention.

I then processed the files from that model, reading and grouping the data so it could be exposed
consistently, and made it available to the rest of the application.

Finally, I implemented a React interface so users could browse the consolidated media and data
directly.
